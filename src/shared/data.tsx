import image1 from "../assets/images/manhunt.jpg";
import image2 from "../assets/images/mira.jpg";
import image3 from "../assets/images/allofusaredead.png";
import image4 from "../assets/images/parasyte.jpg";
import image5 from "../assets/images/the jinx.jpg";

interface DataProps {
  id: number;
  image: string;
  title: string;
  series: number;
  status: string;
  time: number;
}

export const data: DataProps[] = [
  {
    id: 1,
    image: image1,
    title: "MANHUNT",
    series: 1,
    status: "Updated",
    time: 46,
  },
  {
    id: 2,
    image: image2,
    title: "MIRA",
    series: 1,
    status: "Going Viral",
    time: 50,
  },
  {
    id: 3,
    image: image3,
    title: "All of Us are Dead",
    series: 1,
    status: "Drama Popular",
    time: 78,
  },
  {
    id: 4,
    image: image4,
    title: "Parasyte",
    series: 1,
    status: "Updated",
    time: 53,
  },
  {
    id: 5,
    image: image5,
    title: "The Jinx",
    series: 2,
    status: "Most Waited",
    time: 64,
  },
];

