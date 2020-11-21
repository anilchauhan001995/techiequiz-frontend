import { environment as env } from '../environments/environment';

export class BackendAppSettings {

    baseUrl:string = '';

    static endpoint = {
        getAllSubjects: {
            getUrl(): string {
                const url = `quiz/subjects`;
                return `${env.backend.baseUrl}/${url}`;
            }
        },
        getSubjectById: {
            getUrl(id: number): string {
                const url = `admin/subject/${id}`;
                return `${env.backend.baseUrl}/${url}`;
            }
        },
        subject: {
            getUrl(): string {
                const url = `admin/subject`;
                return `${env.backend.baseUrl}/${url}`;
            }
        },
        authenticate: {
            getUrl(): string {
                const url = `authenticate`;
                return `${env.backend.baseUrl}/${url}`;
            }
        }
    };
}