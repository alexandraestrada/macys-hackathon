export * from './auth';

export function login(user) {
    return {
        'type': 'auth_success',
        'payload': { "user": {} }
    };
};