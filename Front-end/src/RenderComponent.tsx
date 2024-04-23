import ChapLivre from "./ChapLivre";
import CommScien from "./CommScien";
import Revue from "./Revue";

interface RenderComponentProps {
    count1: number;
    count2: number;
    count3: number;
    cinDoct : string ;
  }
  
  const RenderComponent: React.FC<RenderComponentProps> = ({ count1, count2, count3 ,cinDoct }) => {

    const renderComponents = <T extends { cinDoct: string }>(
      Component: React.FC<{ cinDoct: string }>,
        count: number ,
        cinDoct : string) => {
        const components = [];
        for (let i = 0; i < count; i++) {
          components.push(<Component key={i} cinDoct={cinDoct}/>);
        }
        return components;
      };

      window.scrollTo({
        top : window.pageXOffset + 700 ,
        behavior : 'smooth'
      });

    return(
        <>
            {renderComponents(Revue , count1 , cinDoct)}
            {renderComponents(CommScien  , count2 , cinDoct)}
            {renderComponents(ChapLivre , count3 , cinDoct)}
        </>
    );
};

export default RenderComponent ;