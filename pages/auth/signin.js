import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// Browser
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div
        className="flex flex-col items-center 
      justify-center min-h-screen py-2 -mt-32 
      px-14 text-center"
      >
        <img
          className="w-80"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaZD-QvPmVX0qcnrSUOqnV0XITHZMst3Fgw&usqp=CAU"
          alt=""
        />
        <p className="font-xs italic ">
          Đây không phải là insta , đây là con mòe bị bắt zì híp dzam
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//Ssr
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
export default signIn;
