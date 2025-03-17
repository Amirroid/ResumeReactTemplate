import HorizontalPadding from "../padding/HorizontalPadding";

export default function BackDropImage() {
    return (
        <HorizontalPadding>
            <img
                className="w-full h-[250px] object-cover mt-12 rounded-[60px] hidden md:block"
                src="images/bg.jpg"
                alt="bg"
            />
        </HorizontalPadding>
    );
}
