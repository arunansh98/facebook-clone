import { useContext } from "react";
import Card from "../../../shared/components/Card/Card";
import VerticalTabs from "../../../shared/components/VerticalTabs/VerticalTabs";
import "./About.css";
import BlueOutlineAnchor from "../../../shared/components/BlueOutlineAnchor/BlueOutlineAnchor";
import { FaLock } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { TabsContext } from "../Profile";
import { FaMale } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import TextWithIcons from "../../../shared/components/TextWithIcons/TextWithIcons";
import { MdGroups2 } from "react-icons/md";
import { BsCake2Fill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Tabs from "../../../shared/components/Tabs/Tabs";
import { LuPlus } from "react-icons/lu";

function About() {
  const { activeVerticalTab, setActiveVerticalTab } = useContext(TabsContext);

  const renderTab = (tab) => {
    return (
      <button className="btn-transparent !text-[#65676B] pl-2 flex flex-start w-full">
        {tab.label}
      </button>
    );
  };

  const renderActiveTab = (tab) => {
    return (
      <button className="btn-transparent !bg-[#ddeafb] !text-blue pl-2 flex flex-start w-full">
        {tab.label}
      </button>
    );
  };

  const contactField = (
    <TextWithIcons
      label="6370907287"
      value="Mobile"
      className="pt-8 pr-4"
      leftIcon={IoCall}
      rightIcons={{
        left: FaLock,
        right: VscEdit,
      }}
    />
  );

  const overviewContent = (
    <div className="pt-5 pb-10">
      <BlueOutlineAnchor value="Add a workplace" className="pt-5" />
      <BlueOutlineAnchor value="Add secondary school" className="pt-8" />
      <BlueOutlineAnchor value="Add university" className="pt-8" />
      <BlueOutlineAnchor value="Add current city" className="pt-8" />
      <BlueOutlineAnchor value="Add a workplace" className="pt-8" />
      <BlueOutlineAnchor value="Add home town" className="pt-8" />
      <BlueOutlineAnchor value="Add a relationship status" className="pt-8" />
      {contactField}
    </div>
  );

  const workContent = (
    <div className="pt-3 pb-10">
      <BlueOutlineAnchor label="Work" value="Add a workplace" />
      <BlueOutlineAnchor
        label="University"
        value="Add university"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="High School"
        value="Add secondary school"
        className="pt-8"
      />
    </div>
  );

  const placesContent = (
    <div className="pt-3">
      <BlueOutlineAnchor label="Places lived" value="Add current city" />
      <BlueOutlineAnchor value="Add home town" className="pt-8" />
      <BlueOutlineAnchor value="Add city" className="pt-8" />
    </div>
  );

  const relationshipContent = (
    <div className="pt-3">
      <BlueOutlineAnchor
        label="Relationship"
        value="Add a relationship status"
      />
      <BlueOutlineAnchor
        label="Family members"
        value="Add family member"
        className="pt-8"
      />
    </div>
  );

  const detailsContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor
        label="About You"
        value="Write some details about yourself"
      />
      <BlueOutlineAnchor
        label="Name pronunciation"
        value="Add a name pronunciation"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Other names"
        value="Add a nickname, a birth name etc."
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Favourite Quotes"
        value="Add your favourite quotations"
        className="pt-8"
      />
      <BlueOutlineAnchor
        label="Blood Donations"
        value="Learn about blood donations"
        className="pt-8"
      />
    </div>
  );

  const lifeContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor label="Life events" value="Add a life event" />
      <TextWithIcons
        className="mt-4"
        label="No life events to show"
        leftIcon={FaRegStar}
      />
    </div>
  );

  const contactContent = (
    <div className="pt-3 pb-8">
      <BlueOutlineAnchor
        label="Contact info"
        value="Add a phone number confirmation badge"
      />
      {contactField}
      <BlueOutlineAnchor
        label="Websites and social links"
        value="Add a website"
        className="pt-8"
      />
      <BlueOutlineAnchor value="Add a social link" className="pt-6" />
      <BlueOutlineAnchor
        label="Basic info"
        value="Add a language"
        className="pt-8"
      />
      <TextWithIcons
        label="Male"
        value="Gender"
        className="pt-8 pr-4"
        leftIcon={FaMale}
        rightIcons={{
          left: MdOutlinePublic,
          right: VscEdit,
        }}
      />
      <TextWithIcons
        label="27 January"
        value="Birth date"
        className="pt-8 pr-4"
        leftIcon={BsCake2Fill}
        rightIcons={{
          left: MdGroups2,
          right: VscEdit,
        }}
      />
      <TextWithIcons
        label="1993"
        value="Birth year"
        className="pt-8 pr-4"
        rightIcons={{
          left: MdGroups2,
        }}
      />
    </div>
  );

  const tabOptions = [
    {
      id: "overview",
      label: "Overview",
      renderTab,
      renderActiveTab,
      content: overviewContent,
    },
    {
      id: "work",
      label: "Work and education",
      renderTab,
      renderActiveTab,
      content: workContent,
    },
    {
      id: "places",
      label: "Places lived",
      renderTab,
      renderActiveTab,
      content: placesContent,
    },
    {
      id: "contact",
      label: "Content and basic info",
      renderTab,
      renderActiveTab,
      content: contactContent,
    },
    {
      id: "family",
      label: "Family and relationships",
      renderTab,
      renderActiveTab,
      content: relationshipContent,
    },
    {
      id: "details",
      label: "Details about you",
      renderTab,
      renderActiveTab,
      content: detailsContent,
    },
    {
      id: "life",
      label: "Life events",
      renderTab,
      renderActiveTab,
      content: lifeContent,
    },
  ];

  const renderHeader = (tab) => {
    return (
      <div className="px-4 py-3 hover:bg-[#f3f3f3] text-[#65676B] font-[600] cursor-pointer rounded-[6px]">
        {tab.label}
      </div>
    );
  };

  const renderActiveHeader = (tab) => {
    return (
      <>
        <div className="px-4 py-3 text-blue font-[600] cursor-pointer rounded-[6px] flex flex-col">
          {tab.label}
        </div>
        <hr className="border-blue border-[2px]" />
      </>
    );
  };

  const aboutCard = (
    <Card>
      <VerticalTabs
        activeTab={activeVerticalTab}
        setActiveTab={setActiveVerticalTab}
        tabOptions={tabOptions}
        tabHeader={<h1 className="font-bold text-[20px] pl-2 py-2">About</h1>}
      />
    </Card>
  );

  const albumsCard = (
    <Card className="mt-5 px-4 py-2">
      <div className="flex items-center justify-between">
        <h2>Photos</h2>
        <div className="flex items-center">
          <button className="btn-transparent px-3 text-blue mr-2">
            Add photos/video
          </button>
          <button className="btn-secondary px-4">
            <HiOutlineDotsHorizontal />
          </button>
        </div>
      </div>
      <Tabs
        tabs={[
          {
            id: "albums",
            label: "Albums",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <a
                href="add"
                className="text-black font-[600] flex flex-col mt-4"
              >
                <button className="p-[5rem] self-start bg-grey rounded-[10px] border-solid border-[1px] border-[#dddfe2] mb-2">
                  <LuPlus className="h-[35px] w-[35px]" />
                </button>
                Create Album
              </a>
            ),
          },
        ]}
      />
    </Card>
  );

  const sportsCard = (
    <Card className="mt-5 px-4 pt-2 pb-6">
      <div className="flex items-center justify-between">
        <h2>Sports</h2>
        <button className="btn-secondary px-4">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: "sportsTeams",
            label: "Sports Teams",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "sportsPeople",
            label: "Sportspeople",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
        ]}
      />
    </Card>
  );

  const musicCard = (
    <Card className="mt-5 px-4 pt-2 pb-9">
      <div className="flex items-center justify-between">
        <h2>Music</h2>
        <button className="btn-secondary px-4">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: "artists",
            label: "Artists",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Artists to show</h2>
            ),
          },
        ]}
      />
    </Card>
  );

  const filmsCard = (
    <Card className="mt-5 px-4 pt-2 pb-9">
      <div className="flex items-center justify-between">
        <h2>Films</h2>
        <button className="btn-secondary px-4">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: "watched",
            label: "Watched",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Watched to show</h2>
            ),
          },
          {
            id: "tvprogrammes",
            label: "TV Programmes",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">
                No TV Programmes to show
              </h2>
            ),
          },
        ]}
      />
    </Card>
  );

  const booksCard = (
    <Card className="mt-5 px-4 pt-2 pb-9">
      <div className="flex items-center justify-between">
        <h2>Books</h2>
        <button className="btn-secondary px-4">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: "read",
            label: "Read",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Read to show</h2>
            ),
          },
          {
            id: "books",
            label: "Books",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Books to show</h2>
            ),
          },
        ]}
      />
    </Card>
  );

  const likesCard = (
    <Card className="mt-5 px-4 pt-2 pb-9">
      <div className="flex items-center justify-between">
        <h2>Likes</h2>
        <button className="btn-secondary px-4">
          <HiOutlineDotsHorizontal />
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: "allLikes",
            label: "All Likes",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "films",
            label: "Films",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Films to show</h2>
            ),
          },
          {
            id: "tvprogrammes",
            label: "TV Programmes",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">
                No TV Programmes to show
              </h2>
            ),
          },
          {
            id: "artists",
            label: "Artists",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Artists to show</h2>
            ),
          },
          {
            id: "books",
            label: "Books",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: (
              <h2 className="text-[#65676B] text-center">No Books to show</h2>
            ),
          },
          {
            id: "sportsTeams",
            label: "Sports Teams",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "sportsPeople",
            label: "Sportspeople",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "people",
            label: "People",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "restaurants",
            label: "Restaurants",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
          {
            id: "appsAndGames",
            label: "Apps and Games",
            renderHeader,
            renderActiveHeader,
            type: "tab",
            content: "",
          },
        ]}
      />
    </Card>
  );

  return (
    <div className="about">
      {aboutCard}
      {albumsCard}
      {sportsCard}
      {musicCard}
      {filmsCard}
      {booksCard}
      {likesCard}
    </div>
  );
}

export default About;
