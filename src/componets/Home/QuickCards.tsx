

export const QuickCards = () => {
  return (
    <div className="flex  max-w-xs">
      <div className="flex flex-col items-center border rounded-lg  bg-white py-10 px-10">
        <img
          className="size-mid mb-4"
          src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f2314115139cb05ab742_icon-contact.svg"
        ></img>
        <h3 className="text-2xl  text-center">Quick Card</h3>
        <p className="text-lg mb-8 text-center">
          Quick Card 6659affa71a3c7c8796f55fd
        </p>
        <div className="iconBtn !bg-yellow-200 hover:!bg-yellow-300">
          <img
            src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f34a7c4001ead54601b4_icon-arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
