import Head from "next/head";

export default function botlle() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Botlle Certiblock</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="flex justify-center h-max -mb-14">
        <div className="p-16 bg-neutral text-base-content md:rounded-t-[4.5rem] w-screen">
          <div className="flex flex-col items-center ">
            <h1 className="text-4xl font-bold text-primary">
              Certificado de origen en blockchain
            </h1>
            <h1 className="text-2xl font-bold p-4 text-success">
              Dueño:{" "}
              <span className="text-primary">
                Fábrica de Licores de Antioquia
              </span>
            </h1>

            <div className="flex justify-center p-4 scale-100 items-center">
              <img
                src="https://cdn.discordapp.com/attachments/1032502035100225587/1041112275878162483/logo-fla.png"
                alt="Logo"
                className="w-16 h-18"
              />
              <h1 className="text-white pt-4">
                <span className="text-primary">............</span>
                .............
              </h1>
              <img
                src="https://cdn.discordapp.com/attachments/1032502035100225587/1041112275538411650/logo-sin-cuadro.png"
                alt="Logo"
                className="w-16 h-18"
              />
              <h1 className="text-primary pt-4">
                <span className="text-white">............</span>
                .............
              </h1>
              <img
                src="https://cdn.discordapp.com/attachments/1032502035100225587/1041112276561821756/texto-certiblock.png"
                alt="Logo"
                className="mt-4 w-16 h-18"
              />
            </div>

            <h1 className="text-2xl text-error font-bold">IMPORTANTE</h1>
            <p className="text-center flex flex-col items center justify-left p-2 text-success">
              Te están vendiendo este producto como si estuviera sellado. Puedes
              denunciar con sólo tocar un botón.
            </p>
            <button className="btn-error btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg w-full max-w-xs my-2 font-bold text-xl">
              DENUNCIAR
            </button>
            <p className="text-center flex flex-col items center justify-left p-2 text-success">
              Debido a que nuestro dominio puede ser copiado, asegúrate de que
              este sí sea
              <span className="text-primary text-lg">www.certiblock.co;</span>
              esto garantiza la legitimidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
