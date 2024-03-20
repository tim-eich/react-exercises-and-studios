import './styles.css';

function Button() {
   const onLearnMore = () => window.alert("Approximately 100,000,000 sharks are removed from the ocean annually.");
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;