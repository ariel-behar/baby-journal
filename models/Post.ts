import { Identifiable, idType } from "@/types/common-types";

export interface Post extends Identifiable {
	userId: idType;
	id: idType;
	title: string;
	body: string;
}