import ButtonRedirect from "../atoms/ButtonRedirect";
import LogoRoyale from "../atoms/LogoRoyale";
const WelcomePage = () => {
  return (
    <section className="flex flex-col items-center justify-between w-screen h-screen py-12 px-6">
      <div className="mb-12 flex-col-center">
        <LogoRoyale />
        <h1 className="text-gray-100 text-center text-lg mt-12">
          Welcome to Safary Royale, the betting site where you can win x100
        </h1>
      </div>
      <div className="flex-col-center gap-4">
        <ButtonRedirect href={"/login"} text={"Ingresar"} />
        <ButtonRedirect href={"/signup"} text={"Registro"} />
      </div>
    </section>
  );
};
export default WelcomePage;
