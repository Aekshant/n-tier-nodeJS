import mongoose, { ConnectOptions } from "mongoose";

class Database {
  private static instance: Database;
  private dbURI: string;

  private constructor() {
    this.dbURI = "mongodb://localhost:27017/demo";
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions); // Explicitly cast options to `ConnectOptions`
      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  }
}

export default Database;
