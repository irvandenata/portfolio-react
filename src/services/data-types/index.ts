export interface Projects {
	_id: string;
	name: string;
}

export interface Header {
	description: string;
	image_profile: string;
}

export interface WorkExpItem {
	id: string;
	title: string;
	subTitle: string;
	description: string;
	icon: string;
	startDate: string;
	endDate: string;
}

export interface ArticleItem {
	body: string;
	categoryId: string;
	createdAt: string;
	id: string;
	image: string;
	slug: string;
	source: string;
	status: string;
	title: string;
	updatedAt: string;
}

export interface ArticleCard {
	createdAt: string;
	id: string;
	image: string;
	slug: string;
	title: string;
}


export interface ArticleDetail{
    "id":number,
    "title": string,
    "slug": string,
    "image": string,
    "source": string,
    "body": string,
    "categoryId":number,
    "status": number,
    "createdAt": string,
    "category": {
        "id": number,
        "name": string,
        "slug": string,
        "status": number,
    }
}

// export interface GameItemTypes {
//     _id: string;
//     status: string;
//     name: string;
//     thumbnail: string;
//     category: CategoryTypes;
// }
