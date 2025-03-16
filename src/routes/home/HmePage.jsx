import HomeLayout from "../../components/layouts/home/HomeLayout";
import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";

export default function HomePage() {
  return (
    <HomeLayout>
      <BackDropImage />
      <MyInformationSection />
    </HomeLayout>
  );
}