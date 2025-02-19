
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreatePost from "../components/common/CreatePost";
import MyMovementCard from "../components/common/MyMovementCard";
import MovementByCategory from "../components/common/MovementByCategory";

const myMovementData = [
    {
        id:1,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:2,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:3,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:4,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:5,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:6,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:7,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:8,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:9,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:10,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:11,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:12,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:13,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:14,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:15,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
    {
        id:16,
        img:'https://i.ibb.co.com/YwpLrT7/movement-img.png',
        title:'Design Team',
        description:'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out'
    },
]
const JoinedMovementData = [
    {
        category: "Arts",
        posts: [
            {
                id: 1,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 2,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 3,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 4,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Social",
        posts: [
            {
                id: 5,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 6,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 7,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 8,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Sports",
        posts: [
            {
                id: 9,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 10,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 11,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 12,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    },
    {
        category: "Health & Wellbeing",
        posts: [
            {
                id: 13,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 14,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 15,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            },
            {
                id: 16,
                title: "Design Team",
                description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out",
                time: "20d ago",
                comments: 400,
                shares: 270,
                img: "https://i.ibb.co.com/YwpLrT7/movement-img.png"
            }
        ]
    }
];

const halfIndex = Math.ceil(myMovementData.length / 2)
const JoinedhalfIndex = Math.ceil(JoinedMovementData.length / 2)

const MovementPage = () => {
  return (
    <section className="movement-section pt-6">
        <Tabs defaultValue="my-movement" className="w-[full]">
            {/* header  */}
            <div className="flex items-center justify-between">
                <TabsList className="flex gap-[60px]">
                    <TabsTrigger value="my-movement" className="tab-button">My Movement</TabsTrigger>
                    <TabsTrigger value="joined-movement" className="tab-button">Joined Movement</TabsTrigger>
                    <TabsTrigger value="suggested" className="tab-button">Suggested</TabsTrigger>
                </TabsList>
                <div className="w-[422px]">
                    <CreatePost />
                </div>
            </div>
            <div className="mt-7">
                <div className="max-h-[calc(100vh-233px)] overflow-y-auto tab-content">
                    <TabsContent value="my-movement" >
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                {
                                    myMovementData?.slice(0, halfIndex).map((item) => (
                                        <div key={item?.id} className="mt-4 first:mt-0">
                                            <MyMovementCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    myMovementData?.slice(halfIndex).map((item) => (
                                        <div key={item?.id} className="mt-4 first:mt-0">
                                            <MyMovementCard item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                </div>
                <div className="max-h-[calc(100vh-233px)] overflow-y-auto tab-content">
                    <TabsContent value="joined-movement" >
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                {
                                    JoinedMovementData?.slice(0, JoinedhalfIndex).map((item) => (
                                        <div key={item?.category}>
                                            <MovementByCategory item={item} name="joined" />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    JoinedMovementData?.slice(JoinedhalfIndex).map((item) => (
                                        <div key={item?.category}>
                                            <MovementByCategory item={item} name="joined" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                </div>
                <div className="max-h-[calc(100vh-233px)] overflow-y-auto tab-content">
                    <TabsContent value="suggested">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    {
                                        JoinedMovementData?.slice(0, JoinedhalfIndex).map((item) => (
                                            <div key={item?.category}>
                                                <MovementByCategory item={item} name="suggested" />
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        JoinedMovementData?.slice(JoinedhalfIndex).map((item) => (
                                            <div key={item?.category}>
                                                <MovementByCategory item={item} name="suggested" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                    </TabsContent>
                </div>
            </div>
            
        </Tabs>
    </section>
  );
};

export default MovementPage;