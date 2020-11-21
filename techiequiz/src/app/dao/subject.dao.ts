import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BackendAppSettings } from '../backend.settings';
import { Observable } from 'rxjs';
import { ISubject } from '../model/subject.model';

export interface SubjectResponse {
    subId: number;
    subName: string;
    subDesc: string;
}

@Injectable({
    providedIn: 'root'
  })
export class SubjectDao {

    constructor(private http: HttpClient) { 
    }

    getAllSubjects(): Observable<SubjectResponse[]> {
        const url = BackendAppSettings.endpoint.getAllSubjects.getUrl();
        return this.http.get<SubjectResponse[]>(url).pipe(res => res);
    }

    getSubjectById(id: number): Observable<SubjectResponse> {
        const url = BackendAppSettings.endpoint.getSubjectById.getUrl(id);
        return this.http.get<SubjectResponse>(url).pipe(res => res);
    }

    addSubject(subName: string, subDesc: string): Observable<SubjectResponse> {
        const url = BackendAppSettings.endpoint.subject.getUrl();
        return this.http.post<SubjectResponse>(url, {subName: subName, subDesc: subDesc});
    }

    updateSubject(subject: ISubject): Observable<string> {
        const url = BackendAppSettings.endpoint.subject.getUrl();
        return this.http.put<string>(url, subject);
    }

    deleteSubject(subId: number): Observable<string> {
        const url = BackendAppSettings.endpoint.getSubjectById.getUrl(subId);
        return this.http.delete<string>(url);
    }
}