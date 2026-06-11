
export class Storage {

    set = async (keyVal: Store):Promise<boolean> =>{
        return await window.electron.setStorage(keyVal)
    } 

    get = async (key: keyof AppStoreSchema):Promise<string | number> =>{
        return await window.electron.getStorage(key)
    } 

}