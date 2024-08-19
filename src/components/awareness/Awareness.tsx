import hero from "/awareness_hero.png?url";
import React from 'react';

import ScamCard from './ScamCard';
import DetailCard from './DetailCard';

const AwarenessSection = () => {
  return (
    <section className="relative w-auto h-auto">
      <img src={hero} alt="Hero image" className="w-full object-cover brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85" />

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
            className="w-full md:w-96 px-4 py-2 border rounded-l-lg focus:outline-1 focus:outline-blue-400 shadow-sm"
          />
          <button className="bg-blue-700 text-white px-8 py-2 rounded-r-lg shadow-lg hover:bg-blue-800 focus:outline-none ease-in-out hover:skeleton hover:rounded-none hover:rounded-tr-lg hover:rounded-br-lg transition-all">
            Check
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
      description: "Imposter scams involve criminals posing as trusted individuals or organizations, such as government agencies, financial institutions, or well-known companies. They use various tactics to deceive victims into providing personal information, financial details, or making payments. These scams often involve urgent threats or promises of rewards to manipulate victims into acting quickly without verifying the legitimacy of the request.",
    },
    {
      title: "Blackmail Scam",
      image: "awareness_detail_2.png",
      description: "In a blackmail scam, fraudsters threaten to reveal compromising or sensitive information unless the victim pays a ransom. The threats can involve exposing personal data, private photos, or false allegations of misconduct. Victims are often coerced into making payments out of fear, even if the threats are baseless or the information is fabricated. The goal is to exploit fear and shame for financial gain.",
    },
    {
      title: "Romance Scam",
      image: "awareness_detail_3.png",
      description: "Romance scams exploit emotions by targeting individuals seeking relationships. Scammers create fake profiles on dating websites or social media, often using stolen photos and fabricated identities. They build trust and emotional connections over time, only to fabricate crises or urgent needs, asking the victim for money or sensitive information. Victims are often left heartbroken and financially devastated when they realize the relationship was a lie.",
    },
    {
      title: "Employment Scams",
      image: "awareness_detail_4.png",
      description: "Employment scams prey on job seekers by offering fake job opportunities. Scammers create realistic-looking job postings, conduct fake interviews, and send fraudulent job offers. They may ask for personal information, such as social security numbers, or upfront payments for background checks, training, or equipment. Victims may invest time and money into what seems like a legitimate job, only to realize it's a scam after their personal information or money has been stolen.",
    },
    {
      title: "Phishing Scam",
      image: "awareness_detail_5.png",
      description: "Phishing scams are deceptive attempts to obtain sensitive information by masquerading as a trustworthy entity in electronic communications. These scams often involve fake emails, messages, or websites designed to look legitimate, tricking victims into providing login credentials, financial information, or other personal details. Phishing attacks can lead to identity theft, financial loss, and unauthorized access to sensitive accounts.",
    },
    {
      title: "Investment Scam",
      image: "awareness_detail_6.png",
      description: "Investment scams promise high returns with little or no risk to lure victims into parting with their money. These scams often involve fake investment opportunities, such as Ponzi schemes, pyramid schemes, or fraudulent stocks and bonds. Victims are persuaded to invest large sums, only to find out later that the investment was a sham and their money has vanished.",
    },
    {
      title: "Social Engineering Scam",
      image: "awareness_detail_7.png",
      description: "Scammers manipulate victims into providing personal information or money through psychoSocial engineering scams manipulate victims into revealing confidential information or performing actions that compromise their security. These scams rely on psychological tactics, exploiting human behavior and trust rather than technical hacking methods. Victims may be tricked into providing passwords, personal information, or access to secure systems, often without realizing they've been deceived.",
    },
    {
      title: "Cloud Mining Scam",
      image: "awareness_detail_8.png",
      description: "Cloud mining scams offer victims the opportunity to mine cryptocurrencies through cloud-based services. Scammers typically lure victims with promises of high returns and minimal effort. However, these operations are often fraudulent, with no actual mining taking place. Victims invest in non-existent services, losing their money to scammers who vanish without a trace.",
    }
  ];

  return (
    <section className="my-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-10">
        <p className="text-4xl text-blue-700 font-bold uppercase">Common Types of Scams</p>
      </div>
      
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {scams.map((scam, index) => (
            <React.Fragment key={index}>
              <ScamCard
                {...scam}
                showDetails={() => {
                  const modal = document.getElementById(`scam-modal-${index}`) as HTMLDialogElement;
                  if (modal) modal.showModal();
                }}
              />
              <DetailCard
                id={`scam-modal-${index}`}
                title={scam.title}
                description={scam.description}
              />
            </React.Fragment>
          ))}
        </div>
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