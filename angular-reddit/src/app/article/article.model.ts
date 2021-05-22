export class Article {

    private title: string;
    private link: string;
    private votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0
    }

    getTitle(): string {
        return this.title;
    }

    getLink(): string {
        return this.link;
    }

    getVotes(): number {
        return this.votes;
    }

    voteUp(): void {
        this.votes ++;
    }

    voteDown(): void {
        this.votes --;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1]
            return domainAndPath.split('/')[0];
        } catch (error) {
            console.log(error)
            return "";
        }
    }
}