import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";

export default class TuitDao implements TuitDaoI {
    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }
    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }
    async findTuitsByUser(uid: string): Promise<any>{
        return await TuitModel.findById(uid);
    }
    async createTuit(tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create(tuit);
    }
    async deleteTuit(uid: string):  Promise<any> {
        return await TuitModel.deleteOne({_id: uid});
    }
    async updateTuit(uid: string, tuit: Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: uid}, {$set: tuit});
    }
}
