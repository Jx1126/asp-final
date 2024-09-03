import { useState } from 'react'; 

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const JobApplicationModal: React.FC<Props> = ({ isOpen, onClose, title }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formError, setFormError] = useState('');
  if (!isOpen) return null;

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (!agreedToTerms) {
      setFormError('Please agree to the terms and conditions before submitting.');
      return;
    }
    setFormError('');
    onClose();
    alert('Application submitted successfully!');
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5 sm:p-10">
      <div className="bg-white p-6 rounded-lg max-w-md w-full m-4">
        <p className="mb-3">You're applying for <span className="font-bold text-blue-500">{title}</span></p>

        <form onSubmit={handleFormSubmission}>
          <label className="form-control w-full max-w-xs gap-3">
            <div>
              <div className="label">
                <span className="label-text">Full Name</span>
              </div>
              <input type="text" placeholder="John" className="input input-bordered w-full max-w-xs" required />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="email" placeholder="john@gmail.com" className="input input-bordered w-full max-w-xs" required />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Phone Number</span>
              </div>
              <input type="tel" placeholder="+65 1234 5678" className="input input-bordered w-full max-w-xs" required />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Job Type</span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>Select Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
              </select>
            </div>

            <div>
              <div className="label">
                <span className="label-text">Upload Resume</span>
              </div>
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            </div>

            <div>
              <div className="label">
                <span className="label-text">Cover Letter</span>
              </div>
              <textarea className="textarea textarea-bordered h-24" placeholder="Enter Here"></textarea>
            </div>

            <div className="flex">
              <label className="label flex gap-3">
                <input type="checkbox" className="checkbox cursor-pointer" checked={agreedToTerms} onChange={(e) => {setAgreedToTerms(e.target.checked); if (e.target.checked) setFormError('');}} />
                <span className="label-text">I agree to the <span className="hover:underline hover:text-blue-500 cursor-pointer">terms and condition</span>.</span>
              </label>
            </div>

            {formError && <p className="text-red-500 text-sm">{formError}</p>}

            <div className="flex justify-end space-x-2">
              <button className="btn mb-3 btn-secondary shadow-none" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4"> <path fillRule="evenodd" d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z" clipRule="evenodd" /> </svg>
                Return
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;