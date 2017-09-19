FROM openjdk:nanoserver

ADD swagger-spec/swagger.yaml swagger.yaml
ADD jars/swagger-codegen-cli-2.2.1.jar swagger-codegen.jar
# RUN wget https://oss.sonatype.org/content/repositories/releases/io/swagger/swagger-codegen-cli/2.2.1/swagger-codegen-cli-2.2.1.jar

CMD ["java", "-jar", "swagger-codegen.jar", "generate", "-i", "swagger.yaml", "-l", "typescript-angular"]