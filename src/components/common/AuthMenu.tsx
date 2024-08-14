import { useState } from 'react';

interface Props {
  closeAuthMenu: () => void;
}

const AuthMenu = ({ closeAuthMenu }: Props) => {

  const [isLogin, setIsLogin] = useState(true);
  const switchAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center ease-in-out transition-all z-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 relative mx-5">

          <button onClick={closeAuthMenu} className="absolute right-5 top-5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6 hover:brightness-50 transition-all ease-in-out"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> </svg>
          </button>

          <div className="flex items-center justify-center mt-2">
            <p className='text-2xl font-bold mb-2 text-black'>
              {isLogin ? 'Login' : 'Register'}
            </p>
          </div>

          <form action="">

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Username</span>
              </div>
              <div className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="size-4"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /> </svg>
                <input type="text" className="grow" placeholder="Username" required />
              </div>
            </label>
            
            {!isLogin && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <div className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="size-4"> <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /> <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                  <input type="email" className="grow" placeholder="Email" required />
                </div>
              </label>
            )}

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="size-4"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type="password" className="grow" placeholder="Password" required />
              </div>
            </label>
            
            <button type="submit" className="btn btn-primary w-full mt-5 !font-semibold tracking-wider">
              {isLogin ? 'Login' : 'Register'}
            </button>

            <div className="flex mt-2">
              <p className="text-base pr-1">
                {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
              </p>
              <button onClick={switchAuthMode} className="font-semibold text-blue-500 hover:text-blue-800 ease-in-out transition-all">
                {isLogin ? 'Register' : 'Login'}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  );

}

export default AuthMenu;