import { FormEvent } from "react";
import styles from "../styles/NewAd.module.css";
import axios from "axios";
import { POST_AD } from "@/graphql/ads.schema";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/graphql/categories.schema";
import { useRouter } from "next/router";

type Category = {
  id: number;
  title: string;
};

export default function NewAd() {
  const { data, loading } = useQuery(GET_CATEGORIES);
  const router = useRouter();

  const [postAd] = useMutation(POST_AD);

  const hSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const formData = new FormData(evt.target as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    postAd({ variables: { ...formJson, price: Number(formJson.price) } });
    router.push("/")
  };

  return (
    <form onSubmit={hSubmit}>
      <label>
        Titre de l&apos;annonce
        <br />
        <input className={styles["text-field"]} name="title" />
      </label>
      <br />
      <label>
        Prix
        <br />
        <input className={styles["text-field"]} name="price" />
      </label>
      <br />
      {loading ? <p>Loading...</p> : <label>
        Catégorie
        <select name="category">
          {data && data.category.map((category: Category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>
      }
      <br />
      <label>
        Description
        <br />
        <input className={styles["text-field"]} name="description" />
      </label>
      <br />
      <label>
        Propriétaire
        <br />
        <input className={styles["text-field"]} name="owner" />
      </label>
      <br />
      <label>
        Image (url)
        <br />
        <input className={styles["text-field"]} name="imgUrl" />
      </label>
      <br />
      <label>
        Lieu
        <br />
        <input className={styles["text-field"]} name="location" />
      </label>
      <br />
      <label>
        Tags
        <br />
        <input className={styles["text-field"]} name="tags" />
      </label>
      <button className={styles.button}>Submit</button>
    </form>
  );
}
