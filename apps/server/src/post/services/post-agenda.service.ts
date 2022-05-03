import { Service } from "typedi";
import { BaseAgendaService } from "@/common/services/agenda.service";
import PostService from "../post.service";
import { Job } from "agenda";
import { JobPriority } from "agenda/es";
import { Post } from "@/prisma/generated/type-graphql";
import { PostJobs } from "../enums/post-agenda.enum";

@Service()
export class PostAgendaService extends BaseAgendaService {
  constructor(private readonly postService: PostService) {
    super();
  }

  public createPostTrainingJob() {
    this.agenda.define(
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
    await this.agenda.now(PostJobs.SimilarPostRecommenderWithSinglePost, {
      post,
    });
  }
}
