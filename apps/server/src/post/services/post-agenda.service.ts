import { BaseAgendaService } from "@/common/services/agenda.service";
import PostService from "../post.service";
import { Job } from "agenda";
import { JobPriority } from "agenda/es";
import { Post } from "@/prisma/generated/type-graphql";
import { PostJobs } from "../enums/post-agenda.enum";
import { delay, inject, injectable } from "tsyringe";

@injectable()
export class PostAgendaService {
  constructor(
    private readonly baseAgendaService: BaseAgendaService,
    @inject(delay(() => PostService)) private readonly postService: PostService,
  ) {}

  public createPostTrainingJob() {
    this.baseAgendaService.agenda.define(
      PostJobs.SimilarPostRecommenderWithSinglePost,
      { priority: JobPriority.highest },
      async (job: Job) => {
        await this.postService.trainSimilarPostRecommenderWithSinglePost(
          job.attrs.data.post,
        );
      },
    );
  }

  public async executeTrainingSimilarPostJob(post: Post) {
    await this.baseAgendaService.agenda.now(
      PostJobs.SimilarPostRecommenderWithSinglePost,
      { post },
    );
  }

  public deletePostJob() {
    this.baseAgendaService.agenda.define(
      PostJobs.DeletePost,
      { priority: JobPriority.highest },
      async (job: Job) => {
        await this.postService.removePostFromSimilarPostRecommenderData(
          job.attrs.data.postId,
        );
      },
    );
  }

  public async executeDeletePostJob(postId: string) {
    await this.baseAgendaService.agenda.now(PostJobs.DeletePost, { postId });
  }
}
