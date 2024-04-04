import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
@ObjectType()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id!: number;

  @Column()
  @Field()
  title!: string;

  @Column()
  @Field()
  description?: string;

  @Column()
  @Field()
  owner!: string;

  @Column()
  @Field()
  price!: number;

  @Column()
  @Field()
  imgUrl!: string;

  @Column()
  @Field()
  location!: string;

  @Column()
  @Field()
  createdAt!: Date;

  @Field((_type) => Category)
  @ManyToOne((_type) => Category, (category) => category.ads, { eager: true })
  category!: Category;

  @Field((_type) => [Tag])
  @ManyToMany((_type) => Tag, (tag) => tag.ads, { eager: true })
  @JoinTable()
  tags?: Tag[];

  @BeforeInsert()
  updateCreationDate() {
    this.createdAt = new Date();
  }
}
