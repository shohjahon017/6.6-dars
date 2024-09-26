import { brands, colors } from "../constants";

function MyFormData() {
  function handleSubmit(event) {
    event.preventDefault();
    const res = new FormData(event.target);
    console.log(res.get("brand"), res.get("name"), res.get("color"));
  }
  return (
    <div className="base-container py-10 mx-auto flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-96 ">
        <h2 className="font-semibold text-2xl mb-5">Yangi mashina qo`shish</h2>
        <div className="flex flex-col gap-5">
          <input
            name="name"
            type="text"
            placeholder="Topshiriqni yozing"
            className="input input-bordered input-accent w-full  "
          />{" "}
          <select
            defaultValue={" Mashina brendinini tanlang*"}
            name="brand"
            className="select select-bordered w-full  "
          >
            <option disabled></option>
            {brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>{" "}
          <select
            defaultValue={" Mashina rangini tanlang*"}
            name="color"
            className="select select-bordered w-full  "
          >
            <option disabled></option>
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
          <button className="btn btn-primary" type="submit">
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyFormData;
