import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsSidebar from "../components/ProfilePage/TabsSidebar";

const ProfilePage = () => {
  return (
    <section>
      <div>
        <Tabs defaultValue="account" className="w-full flex items-start !bg-transparent">
            <TabsSidebar />
          <div>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProfilePage;
