import Head from "next/head";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Bottle from "../bottle/bottle";

export default function Ureclaim() {
  return (
    <>
      <div className="container">
        <Head>
          <title>User Reclaim Certiblock</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      {/*//navbar */}
      <Navbar />

      <div
        className="hero min-h-screen bg-base-200 bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen -mb-14 pb-20 flex justify-center"
        style={{
          backgroundImage: `url("https://cdn.discordapp.com/attachments/1032502035100225587/1041170715166134412/background3.jpg")`,
        }}
      >
        <div className="hero-content flex-col lg:flex-col">
          <div className="">
            <img
              src="https://cdn.discordapp.com/attachments/1032502035100225587/1041142142325755945/ron-_abierta.png"
              className="max-w-sm rounded-lg shadow-2xl w-38 h-48"
            />
          </div>
        </div>

        <div className="hero-content flex-col lg:flex-col mt-2 ">
          <img
            src="https://cdn.discordapp.com/attachments/1032502035100225587/1041144145663774791/verificacion-rojo.png"
            alt="Logo"
            className="w-16 h-14"
          />

          <h1 className="text-1xl font-bold text-success">
            BOTELLA PREVIAMENTE ABIERTA
          </h1>

          <div className="flex justify-center space-x-4">
            <img
              src="https://cdn.discordapp.com/attachments/1032502035100225587/1041112275878162483/logo-fla.png"
              alt="Logo"
              className="w-12 h-10 mt-1"
            />
            <img
              src="https://cdn.discordapp.com/attachments/1032502035100225587/1041168299519639702/logo-light2.png"
              alt="Logo"
              className="w-17 h-7 mt-2"
            />
          </div>

          <div className="justify-center">
            <button className="btn btn-primary rounded-full">
              LOTE: A 12/12/22
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill ml-3"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              <span className="btn-text m-1 mt-1">1</span>
            </button>
          </div>

          <h1 className="text-2xl text-center font-bold text-primary m-2">ATRIBUTOS</h1>
          <div className="grid justify-items-stretch grid-rows-3 grid-flow-col gap-3">
            <button className="btn btn-success rounded-full">RON</button>
            <button className="btn btn-success rounded-full">5 AÑOS</button>
            <button className="btn btn-success rounded-full">SIN AZÚCAR</button>
            <button className="btn btn-success rounded-full">ABIERTA</button>
            <button className="btn btn-success rounded-full">750 MIL</button>
            <button className="btn btn-success rounded-full">2Z200A</button>
          </div>

          <button className="btn btn-error rounded-full">
            FECHA DE APERTURA 01/12/2022
          </button>
        </div>
      </div>

      {/*//Bottle */}
      <Bottle />

      {/*//Footer */}
      <Footer />
    </>
  );
}