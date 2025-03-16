import Header from "./Header";
import AppLayout from "../app/AppLayout";

export default function HomeLayout({children}) {
  return (
    <AppLayout>
        <Header /> 
        {children}
    </AppLayout>
  );
}