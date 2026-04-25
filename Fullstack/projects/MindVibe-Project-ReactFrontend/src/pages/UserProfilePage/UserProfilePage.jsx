import MoodCard from "../../components/MoodCard/MoodCard";
import { useUserMoods } from "../../hooks/useUserMoods"; 
import BackButton from "../../components/BackBottom/BackBottom";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import styles from "../UserProfilePage/UserProfilePage.module.css";

function ProfilePage() {
  const { savedMoods, clearMoods } = useUserMoods();
  const navigate = useNavigate();

  return (

    <main className={styles["profile-container"]}>

      <header className={styles["header"]}>

        <div>
          <h1 className={styles["title"]}>Mood Summary</h1>
          <p className={styles["subtitle"]}>
            Here you can see how you've been feeling lately
        </p>
        </div>

      </header>

      {/* 🧾 moods seleccionados */}
      <section className={styles["moods-grid"]}>
        {savedMoods.length > 0 ? (
          savedMoods.map((mood, index) => (
            <MoodCard key={`${mood.slug}-${index}`} mood={mood} />
          ))
        ) : (
          <div className={styles["no-data"]}>
            <p>You haven't recorded any moods yet.</p>
          </div>
        )}
      </section>

      {/* 🧹 limpiar moods */}
      {savedMoods.length > 0 && (
        <section className={styles["button-container"]}>
          <div>
            <button className={styles["button"]} onClick={() => navigate("/currentmood")}>
                Which is your Current mood?
            </button>
          </div>

          <div>
            <button className={styles["button"]} onClick={clearMoods}>
              Clear moods
            </button>
          </div>
        </section>
      )}

      
    </main>
  );
}

export default ProfilePage;