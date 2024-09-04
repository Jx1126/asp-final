import { useState } from 'react';

const LinkChecker:React.FC = () => {
  const [link, setLink] = useState('');
  const [result, setResult] = useState('');
  const [resultType, setResultType] = useState<'success' | 'warning' | 'error'>('success');

  const checkLink = () => {

    const protocolCheck1 = /^(http|https):\/\//i;
    if (!protocolCheck1.test(link)) {
      setResultType('error');
      setResult(`Error - The link ${link} does not have a protocol. Please add http:// or https://`);
      return;
    }
    
    const protocolCheck2 = /^https:\/\//i;
    if (!protocolCheck2.test(link)) {
      setResultType('warning');
      setResult(`Warning - The link ${link} does not use HTTPS. It may not be secure.`);
      return;
    }

    const tldCheck = /\.(tk|buzz|xyz|ml|ga|cf|top|info|gq|icu|wang|cn|host|us)(\/|$)/i;
    const tldMatch = link.match(tldCheck);
    if (tldMatch) {
      setResultType('warning');
      setResult(`Warning - The link ${link} uses the TID (.${tldMatch[1]}), which often associated with spam or malicious sites.`);
      return;
    }

    const urlCheck = /^https:\/\/([^/]+)/i
    const url = link.match(urlCheck);
    if (url && url[1].length > 50) {
      setResultType('warning');
      setResult(`Warning - The link ${link} has a long URL. It may be a phishing link.`);
      return;
    }

    setResultType('success');
    setResult(`Success - The link ${link} appears to be okay based on our basic checks.`);
  }

  const getResultColor = () => {
    switch (resultType) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-orange-600';
      case 'error':
        return 'text-red-600';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Link"
          className="w-full md:w-96 px-4 py-2 border rounded-l-lg focus:outline-1 focus:outline-blue-400 shadow-sm"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="bg-blue-700 text-white px-8 py-2 rounded-r-lg shadow-lg hover:bg-blue-800 focus:outline-none ease-in-out hover:skeleton hover:rounded-none hover:rounded-tr-lg hover:rounded-br-lg transition-all" onClick={checkLink}>
          Check
        </button>
      </div>
      {result && (
        <div className={`mt-5 p-4 bg-gray-100 rounded-lg w-full md:w-96 ${getResultColor()}`}>
          <p className="text-base font-semibold">{result}</p>
        </div>
      )}
    </div>
  )
}

export default LinkChecker;