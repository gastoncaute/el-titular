export default function Clima() {
  return (
    <div className="col-start-1 col-end-2 row-start-1 flex justify-center clima_widget">
      <div className="m-8 fixed w-1/6 h-5/6 flex justify-center items-center -mt-8 mr-4">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div
          className="elfsight-app-dcc69813-9b79-4e63-adc5-e08be520222b"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}
