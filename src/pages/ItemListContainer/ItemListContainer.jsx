import React from "react"
import ItemList from "../../components/ItemList/ItemList"
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
	return (
		<div className="item-list-container">
			<h2>{props.greeting}❤️</h2>
			<main className="main-content max-width">
				<ItemList />
			</main>
			
		</div>
	)
}
