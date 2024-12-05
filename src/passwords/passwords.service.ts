import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordsService {
    private passwords = [
        { id: 1, password: 'abc123' },
        { id: 2, password: 'bca321' }
    ]

    findAll() {
        return this.passwords
    }

    findOne(id: number) {
        return this.passwords.find(p => p.id === id)
    }

    create(password: { password: string }) {
        const newPassword = {
            id: this.passwords.length + 1,
            ...password
        }
        this.passwords.push(newPassword)
        return newPassword
    }

    update(id: number, passwordUpdates: { password: string }) {
        const passwordIndex = this.passwords.findIndex(p => p.id === id)
        if (passwordIndex === -1) return `Password with id:${id} not found`

        this.passwords[passwordIndex] = { ...this.passwords[passwordIndex], ...passwordUpdates }
        return this.passwords[passwordIndex]
    }

    remove(id: number) {
        const passwordIndex = this.passwords.findIndex(p => p.id === id)
        if (passwordIndex === -1) return `Password with id:${id} not found`

        this.passwords.splice(passwordIndex, 1)
        return this.passwords[passwordIndex]
    }
}
