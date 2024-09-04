import { useState } from 'react';

const LinkChecker:React.FC = () => {
  const [link, setLink] = useState('');
  const [result, setResult] = useState('');

  const checkLink = () => {
    const protocolCheck1 = /^(http|https):\/\//i;
    const protocolCheck2 = /^https:\/\//i;
    if (!protocolCheck1.test(link)) {
      setResult(`Error - The link ${link} does not have a protocol. Please add http:// or https://`);
      if (!protocolCheck2.test(link)) {
        setResult(`Warning - The link ${link} does not use HTTPS. It may not be secure.`);
      }
      return;
    }

    const tldCheck = /\.(tk|buzz|xyz|ml|ga|cf|top||info|gq|icu|wang|cn|host|us)$/i
    if (tldCheck.test(link)) {
      setResult(`Warning - The link ${link} uses TID often associated with spam or malicious sites.`);
      return;
    }

    const urlCheck = /^https:\/\/([^/]+)/i
    const url = link.match(urlCheck);
    if (url && url[1].length > 50) {
      setResult(`Warning - The link ${link} has a long URL. It may be a phishing link.`);
      return;
    }

    setResult(`Success - The link ${link} appears to be okay based on our basic checks.`);
  }

  return (
    <div className="flex items-center mt-5">
      <input
        type="text"
        placeholder="Link"
        className="w-full md:w-96 px-4 py-2 border rounded-l-lg focus:outline-1 focus:outline-blue-400 shadow-sm"
      />
      <button className="bg-blue-700 text-white px-8 py-2 rounded-r-lg shadow-lg hover:bg-blue-800 focus:outline-none ease-in-out hover:skeleton hover:rounded-none hover:rounded-tr-lg hover:rounded-br-lg transition-all">
        Check
      </button>
    </div>
  )
}

export default LinkChecker;