import loadingImg from "../assets/giphy.webp";
export default function Loading() {
  return (
    <>
      <div className="text-center ">
        <img className="mx-auto bg-green-50" src={loadingImg} alt="loading-img" />
        <p className="-mt-8"> Please wait , Images are loading </p>
      </div>
    </>
  );
}
