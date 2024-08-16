import hero from "/awareness_hero.png?url";

import ScamCard from './ScamCard';

const AwarenessSection = () => {
  return (
    <section className="relative w-auto h-auto">
      <img src={hero} alt="Hero image" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Introduction to Scams</h1>
          <p className="text-lg mt-3 md:text-xl">
            Scams come in many forms - know the risks, safeguard yourself.
          </p>
        </div>
      </div>
    </section>
  );
};

const LinkCheckerSection = () => {
  return (
    <section className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">Link Checker</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">
          If a link seems suspicious, use our link checker to verify its legitimacy.
        </p>
    
        <div className="flex items-center mt-5">
          <input
            type="text"
            placeholder="Link"
            className="w-full md:w-96 px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-700 text-white px-8 py-2 rounded-r-lg shadow-lg hover:bg-blue-800 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

const CommonScamsSection = () => {
  const scams = [
    {
      title: "Imposter Scam",
      image: "awareness_detail_1.png",
    },
    {
      title: "Blackmail Scam",
      image: "awareness_detail_2.png",
    },
    {
      title: "Romance Scam",
      image: "awareness_detail_3.png",
    },
    {
      title: "Employment Scams",
      image: "awareness_detail_4.png",
    },
    {
      title: "Phishing Scam",
      image: "awareness_detail_5.png",
    },
    {
      title: "Investment Scam",
      image: "awareness_detail_6.png",
    },
    {
      title: "Social Engineering Scam",
      image: "awareness_detail_7.png",
    },
    {
      title: "Cloud Mining Scam",
      image: "awareness_detail_8.png",
    }
  ];

  return (
    <section className="my-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-4xl text-blue-700 font-bold uppercase">Common Types of Scams</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {scams.map((scam, index) => (
          <ScamCard key={index} {...scam} />
        ))}
      </div>
    </section>
  );
};

const SignsOfScamsSection = () => {
  return (
    <section className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">Signs of Scams</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Too Good to be True: Offers or deals that seam unrealistically good, such as large sums of money for little work, guaranteed returns on investments, or free high value goods.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Lack of Contact Information: Legitimate businesses usually provide a physical address, phone number, and customer service details.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Poor Grammar and Spelling Errors: Emails or messages with numerous grammatical errors or unusual phrasing may indicate a scam.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Unverified Links and Attachments: Receiving emails with links or attachment from unknown senders or those that appear suspicious.</p>
      </div>
    </section>
    );
}

const AvoidingScamsSection = () => {
  return (
    <section className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">Ways to Avoid Scams</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Protect Personal Information: Never share sensitive information unless sure of the recipient's legitimacy. Be cautious about what to share online.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Ignore Unsolicited Requests: Be skeptical of unsocolicited messages, especially those asking for money or personal details. Verify through direct contact with the supposed sender.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Look out for Red Flags: Pay attention to signs of scams like poor grammar, urgent demands and unsolicited attachments or links.</p>
      </div>
    </section>
    );
}

const ReportingScamsSection = () => {
  return (
    <section className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">Reporting Scams</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Document Everything: Keep records of all interactions, messages and transactions related to the scam.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Provide Details: Be as detailed as possible when reporting the scam, to help authorities understand and investigate the matter.</p>
        <p className="text-xl font-semibold mt-2 w-full text-center">Follow Up: Enquire about follow-up actions or additional steps needed after reporting the scam.</p>
      </div>
    </section>
    );
}

function Awareness() {
  return (
    <>
      <AwarenessSection />
      <LinkCheckerSection />
      <CommonScamsSection />
      <SignsOfScamsSection />
      <AvoidingScamsSection />
      <ReportingScamsSection />
    </>
  );
}

export default Awareness;