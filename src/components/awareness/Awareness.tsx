import hero from "/awareness_hero.png?url";
import React from 'react';

import ScamCard from './ScamCard';
import DetailCard from './DetailCard';
import LinkChecker from './LinkChecker';
import DropdownList from '../common/DropdownList';
import Divider from '../common/Divider';

const AwarenessSection = () => {
  return (
    <section className="relative w-auto h-auto">
      <img src={hero} alt="Hero image" className="w-full h-full object-cover brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85" />

      <div className="absolute inset-0 flex items-center justify-center sm:justify-start">
        <div className="text-white px-6 sm:px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">Introduction to Scams</h1>
          <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-3 text-center sm:text-left">
            Scams come in many forms, safeguard yourself.
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
    
        <LinkChecker />
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
  const scams = [
    {
      title: "Too Good to be True",
      description: "Offers or deals that seam unrealistically good, such as large sums of money for little work, guaranteed returns on investments, or free high value goods."
    },
    {
      title: "Lack of Contact Information",
      description: "Legitimate businesses usually provide a physical address, phone number, and customer service details."
    },
    {
      title: "Poor Grammar and Spelling Errors",
      description: "Emails or messages with numerous grammatical errors or unusual phrasing may indicate a scam."
    },
    {
      title: "Unverified Links and Attachments",
      description: "Receiving emails with links or attachment from unknown senders or those that appear suspicious."
    }
  ]

  return (
    <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mb-5 relative z-20">
        <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Signs of Scams</p>
        <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">By understanding these warning signs, you can safeguard your personal information against deceptive schemes</p>
      </div>
      
      <DropdownList items={scams} />
    </section>
    );
}

const AvoidingScamsSection = () => {
  const avoid = [
    {
      title: "Protect Personal Information",
      description: "Never share sensitive information unless sure of the recipient's legitimacy. Be cautious about what to share online."
    },
    {
      title: "Ignore Unsolicited Requests",
      description: "Be skeptical of unsolicited messages, especially those asking for money or personal details. Verify through direct contact with the supposed sender."
    },
    {
      title: "Look out for Red Flags",
      description: "Pay attention to signs of scams like poor grammar, urgent demands and unsolicited attachments or links."
    }
  ]

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center mb-5 relative z-20">
      <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Ways to Avoid Scams</p>
      <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">Protect yourself by learning effective strategies to avoid scams. Stay informed about common tactics used by scammers.</p>
    </div>
    
    <DropdownList items={avoid} />
  </section>
    );
}

const ReportingScamsSection = () => {
  const report = [
    {
      title: "Document Everything",
      description: "Keep records of all interactions, messages and transactions related to the scam."
    },
    {
      title: "Provide Details",
      description: "Be as detailed as possible when reporting the scam, to help authorities understand and investigate the matter."
    },
    {
      title: "Follow Up",
      description: "Enquire about follow-up actions or additional steps needed after reporting the scam."
    }
  ]
  return (
    <section className="mb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center mb-5 relative z-20">
      <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Reporting scams</p>
      <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">Reporting scams is a critical step in stopping fraud and protecting others from falling victim.</p>
    </div>
    
    <DropdownList items={report} />
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
      <Divider />
      <AvoidingScamsSection />
      <Divider />
      <ReportingScamsSection />
    </>
  );
}

export default Awareness;