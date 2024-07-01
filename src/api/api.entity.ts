import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity({ name: "API"})
export class Api {
    @PrimaryGeneratedColumn()
    ID: string;

    @Column({ unique: false })
    FIRSTNAME: string;
    @Column({ unique: false })
    LASTNAME: string;
    @Column({ unique: false })
    DATEBIRTHDAY: string;
    @Column({ unique: false })
    EMAIL: string;
    @Column({ unique: false })
    MOBILEPHONE: string;
    @Column({ unique: false })
    WORKPHONE: string;

    STREET: string;
    @Column({ unique: false })
    CITY: string;
    @Column({ unique: false })
    COUNTY: string;
    @Column({ unique: false })
    STATE: string;

    @Column("simple-array")
    FILES: [];

    @Column({ unique: false })
    DATE: string;

}



