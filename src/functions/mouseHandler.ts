/* eslint-disable @typescript-eslint/no-explicit-any */

export const onMouseEnter = (e: any) => {
    const parentId = e.currentTarget!.id
    console.log(parentId)
    const caption = document.querySelector('#' + parentId + ' .icon-caption')
    caption!.classList.remove('invisible')
};
export const onMouseLeave = (e: any) => {
    const parentId = e.currentTarget!.id
    const caption = document.querySelector('#' + parentId + ' .icon-caption')
    caption!.classList.add('invisible')
};
export const eventHandler = {
	onMouseEnter,
	onMouseLeave,
};
