import HorizontalPadding from "../padding/HorizontalPadding";

export default function BackDropImage() {
    return (
        <HorizontalPadding>
            <div className="pt-24">
                <img
                    className="w-full h-[250px] object-cover rounded-[60px] hidden md:block"
                    src="images/bg.jpg"
                    alt="bg"
                />
            </div>
        </HorizontalPadding>
    );
}
