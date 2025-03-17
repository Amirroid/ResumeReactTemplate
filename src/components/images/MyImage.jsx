export default function MyImage() {
    return (
        <div className="w-full min-h-screen h-full flex justify-center items-center overflow-hidden">
            <img
                src="images/me.png"
                alt="my-image"
                className="w-auto h-[87%] object-cover bottom-0 absolute"
            />
        </div>
    );
}
