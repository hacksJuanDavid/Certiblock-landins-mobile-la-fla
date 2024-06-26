import Head from "next/head";

export default function subcription() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Subcription Certiblock</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="flex justify-center h-80 -mb-14">
        <div className="p-16 bg-neutral text-base-content md:rounded-t-[4.5rem] w-screen">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-primary">Suscribete</h1>
            <input
              type="text"
              placeholder="E-mail"
              className="input rounded-full input-primary w-full max-w-xs my-2"
            />
            <button className="btn-primary btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg w-full max-w-xs my-2">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
