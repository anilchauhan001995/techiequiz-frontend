export interface ISubject {
    subId: number;
    subName: string;
    subDesc: string;
}

export interface ISubjectDialog {
    id?: number,
    subName?: string;
    subDesc?: string;
    action: string;
    actionCode: string;
}