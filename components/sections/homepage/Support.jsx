import Button from "../../ui/Button";

export default function Support() {
  return (
    <div className="px-6">
      <div className="mx-auto max-w-main bg-[#EFEDFC] py-10 flex justify-center items-center flex-col gap-5 text-center px-5 text-primary">
        <h2 className="text-[28px] font-bold leading-[34px]">Giving</h2>
        <p className="leading-[26px]">
          Support research, innovation and teaching at one of the best technical
          universities in Europe. Show social responsibility and help nurture
          talent.
        </p>
        <Button>SUPPORT US</Button>
      </div>
    </div>
  );
}
