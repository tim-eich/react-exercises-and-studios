export default function HobbyLinks() {
    let hobbyLinks = ['https://www.woodmagazine.com/', 'https://ceramicartsnetwork.org/ceramics-monthly/'];
    return (
        <div>
           <a href={hobbyLinks[0]}>Wood Magazine</a>
           <a href={hobbyLinks[1]}>Ceramic Arts Network</a>
        </div>      
     );
}