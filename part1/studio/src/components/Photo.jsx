import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <div>
            <img src ="https://altonbrown.com/wp-content/uploads/2020/08/Marshmallows_AB.com_resized.jpg" alt ="photo of marshmallows" className = {styles.imageUpdates} />
        </div>
    );
}