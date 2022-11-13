import Head from "next/head";

export default function abottle() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Abottle</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="grid">
          <h1 className="text-2xl text-center font-bold text-primary m-2">
            ATRIBUTOS
          </h1>
          <div className="grid justify-items-stretch grid-rows-3 grid-flow-col gap-3">
            <button className="btn btn-success rounded-full">RON</button>
            <button className="btn btn-success rounded-full">5 AÑOS</button>
            <button className="btn btn-success rounded-full">SIN AZÚCAR</button>
            <button className="btn btn-success rounded-full">ABIERTA</button>
            <button className="btn btn-success rounded-full">750 MIL</button>
            <button className="btn btn-success rounded-full">2Z200A</button>
          </div>

          <button className="btn btn-error rounded-full my-2">
            FECHA DE APERTURA 01/12/2022
          </button>
        </div>
      
    </>
  );
}