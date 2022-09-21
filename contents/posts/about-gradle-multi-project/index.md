---
title: "Gradle 서브 프로젝트 및 컴포지트 빌드"
description: "📦 Gradle 서브 프로젝트 및 컴포지트 빌드의 개념 정리 및 활용 방법"
date: 2022-09-21
update: 2022-09-21
tags:
  - Gradle
series: "Gradle"
---

## 프롤로그

Gradle 서브 프로젝트와 컴포지트 빌드의 개념 정리 및 활용 방법을 기록해 보았습니다.

위 주제들은 공식 문서에서 충분히 설명된 내용이지만 활용 예시 등 개인적으로 필요하다고 생각되는 부분을 추가하여 함께 정리하였습니다.

본 게시글에서는 Gradle Kotlin DSL로 작성된 코드만을 제공합니다.

## Gradle Sub Project

Gradle에서는 모듈화를 위한 프로젝트를 분리하는 행위 또는 패턴을 <u>'멀티 프로젝트'</u>라고 부르며 <u>'서브 프로젝트'</u>는 각 모듈을 부르는 일종의 단위로 취급합니다. 한편으로 모든 서브 프로젝트들의 최상위 프로젝트와 각 서브 프로젝트의 상위 프로젝트는 각각 <u>'루트 프로젝트'</u>와 <u>'부모 프로젝트'</u>라고 부릅니다.

핵심 기능은 다음과 같습니다:

- 서브 프로젝트 단위로 분리하여 빌드 및 테스트 작업이 가능합니다.
- 서브 프로젝트에 일관된 공통의 설정을 부여할 수 있습니다.
- 서브 프로젝트 간 상호 참조 및 단방향 의존성 부여가 가능합니다.(Circular dependency는 불가능합니다.)
- 다중 플랫폼 프로젝트를 하나의 프로젝트처럼 운용할 수 있습니다.

참고로 Git submodule에 의해 불러와진 추가적인 디렉토리 등을 프로젝트로 인식 시키기 위해서는 멀티 프로젝트보다는 후술하게 될 <u>컴포지트 빌드</u>가 더 적합합니다.

멀티 프로젝트 환경에서 아래와 같은 구조로 모듈화할 수 있습니다.

```plaintext
.
├── app
│   ...
│   └── build.gradle.kts
├── core
│   ...
│   └── build.gradle.kts
└── settings.gradle.kts
```

### 구성하기

루트 프로젝트에 아래와 같이 서브 프로젝트를 명시합니다.

```kotlin
// settings.gradle.kts
rootProject.name = "basic-multiproject"
include("app")
include("core")
```

### 참조하기

서브 프로젝트는 다른 서브 프로젝트에 대한 태스크나 정보 등을 참조할 수 있습니다.

참조 시에는 `project(":PROJECT")`와 같이 표현합니다.  
서브 프로젝트 안의 서브 프로젝트는 `:PROJECT:PROJECT2`와 같이 표현할 수도 있습니다.

다음은 'app' 서브 프로젝트의 'createJar' 태스크가 실행되기 전 'core' 서브 프로젝트의 'createJar' 태스크를 실행하도록 설정하고 maven-publish 시 artifact id로 'core' 서브 프로젝트의 이름을 참조하도록 하는 예시입니다.

```kotlin
// app/build.gradle.kts
tasks.create<Jar>("createJar") {
    dependsOn(project(":core").tasks.getByName("createJar"))
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            artifactId = project(":core").name
        }
    }
}
```

참고로 'core' 서브 프로젝트의 'createJar' 태스크가 실행되기 전 'app' 서브 프로젝트의 'createJar' 태스크가 실행되는 설정까지 추가하면 순환 의존성으로 간주됩니다.

### 의존성 설정하기

서브 프로젝트는 다른 서브 프로젝트에 의존할 수 있습니다.

다음은 'app' 서브 프로젝트에서 'core' 서브 프로젝트를 의존하도록 설정한 예시입니다.

```kotlin
// app/build.gradle.kts
dependencies {
    implementation(project(":core"))
}
```

위와 같이 설정하고 아래와 같이 의존성을 추가 부여하는 것은 순환 의존성으로 간주되어 빌드에 실패하게 됩니다.

```kotlin
// core/build.gradle.kts
dependencies {
    implementation(project(":app"))
}
```

### 여러 개의 서브 프로젝트에 공통 설정 적용하기

여러 개의 서브 프로젝트에 하나의 코드로 공통의 설정을 적용할 수 있습니다.

많은 프로젝트에서 그룹 ID와 버전은 대표적인 공통 설정이 가능한 항목일 것입니다. 다음은 그룹 ID와 버전을 공통 설정으로 부여하는 예시입니다.

```kotlin
// build.gradle.kts
allprojects {
    group = "com.donghoonyoo"
    version = "1.0.0-SNAPSHOT"
}
```

대부분의 경우 공통된 설정을 부모에 두지 않을 이유는 없겠지만, 공통 설정을 루트 프로젝트에 부여해야 할 의무는 없으니 필요에 맞게 코드를 배치할 수 있습니다.

### 서브 프로젝트 설정 변경

서브 프로젝트에서 변경 가능한 항목은 다음과 같습니다.

### 네이밍 컨벤션

안정성을 위해 Gradle에서 권장하는 네이밍 컨벤션은 다음과 같습니다.

1. 프로젝트의 이름을 변경하지 마십시오: 가능하다면 프로젝트의 이름을 변경하지 마십시오. 불필요한 이름 변경은 개발자가 프로젝트 이름 및 디렉토리를 이해하는데 방해가 될 여지가 있습니다.
1. 네이밍에는 케밥 케이스를 사용하십시오: 케밥 케이스는 모두 소문자이고 대시(`-`)로 구분되어 있습니다. 이는 이미 많은 대규모 프로젝트에서 사실상의 표준으로 자리하고 있습니다.
1. 루트 프로젝트 이름을 정의하십시오: 루트 프로젝트의 이름은 프로젝트 전체의 이름으로 간주됩니다. 만약 루트 프로젝트의 이름이 설정되지 않았다면 디렉토리 이름으로 대체됩니다. 이것은 디렉토리명을 변경하는 등의 상황에서 불안정해질 수 있습니다.

## Gradle Composite Build

컴포지트 빌드는 단순히 <u>독립된 프로젝트를 포함</u>하도록 구성하는 것입니다.

멀티 프로젝트와 차이가 없어보일 수 있겠습니다만, 아래 두 가지 상황을 보면 차이가 분명히 존재하다는 것을 알 수 있겠습니다.

- 멀티 프로젝트의 각 서브 프로젝트는 독립할 수 없다는 특징이 있는 반면 컴포지트 빌드에서는 완전히 독립된 프로젝트를 참조시킬 수 있습니다.
- 멀티 프로젝트의 각 서브 프로젝트는 속성을 공유할 수 있는 반면 컴포지트 빌드에서의 독립된 빌드는 각자 격리되어 있습니다.
- 대부분의 경우 서브 프로젝트로 독립된 프로젝트를 추가하면 오류가 발생하거나 정상적으로 사용하기 어렵습니다.

Gradle에서는 컴포지트 빌드를 아래와 같은 사용 사례로 설명하고 있습니다:

- 개발자 입맛에 맞게 조금 수정된 유명한 라이브러리 등 독립적으로 개발된 프로젝트를 포함시킬 수 있습니다.
- 큰 프로젝트를 작게 독립시킬 수 있습니다.

저는 컴포지트 빌드를 다음의 용도로 사용하고 있습니다:

- Git submodule로 가져온 라이브러리를 모듈로 포함시키기 위해 사용
- Gradle Plugin, Kotlin IR Compiler Plugin 테스트를 위해 사용

독립된 프로젝트는 다른 독립된 프로젝트 및 루트 프로젝트와 상호작용할 수 없습니다. 컴포지트 빌드에서의 상호작용은 오직 루트 프로젝트가 독립된 프로젝트를 참조하는 것에 한정됩니다.

컴포지트 빌드에서는 <u>'Dependency Substitution'</u>를 통해 독립된 빌드 간 상호작용이 가능합니다.
이름 그대로 단순히 의존성을 불러오는 과정에서 바이너리를 치환 시켜주는 기능입니다. 멀티 프로젝트에서 하던 속성 공유는 여전히 가능합니다.

의존성의 안정성을 위해 컴포지트 빌드로 불러와진 독립된 프로젝트는 루트 프로젝트보다 먼저 초기화됩니다.
또한, 독립된 프로젝트는 병렬로 초기화되지 않는다는 빌드 성능 상의 불리한 점이 있습니다.

컴포지트 빌드에서 제한되는 사항은 다음과 같습니다.

- 루트 프로젝트와 독립된 프로젝트의 이름은 서로 달라야 합니다.
- 모든 독립된 프로젝트의 이름은 서로 달라야 합니다.

### 구성하기

./my-app 디렉토리에 위치한 독립된 프로젝트는 아래와 같이 정의할 수 있습니다.

```kotlin
// settings.gradle.kts
// ...
includeBuild("my-app")
```

### 참조하기

독립된 프로젝트는 아래의 함수 형식과 같이 참조할 수 있습니다.

```kotlin
interface Gradle {
    // ...
    fun includedBuild(name): IncludedBuild
}
```

컴포지트 빌드의 독립된 프로젝트에게서 참조할 수 있는 항목의 개수는 멀티 프로젝트보다 훨씬 더 한정적입니다. 다음은 컴포지트 빌드에서 참조 가능한 항목입니다.

- (Property) name: 독립된 프로젝트의 이름
- (Property) projectDir: 독립된 프로젝트의 루트 디렉토리
- (Method) task(name: string): 독립된 프로젝트의 태스크 가져오기

다음 루트 프로젝트에서 'my-app'의 ':app:createJar' 태스크를 참조하는 예시입니다.

```kotlin
// build.gradle.kts
tasks.create<Jar>("createJar") {
    dependsOn(gradle.includedBuild("my-app").task(":app:createJar"))
}
```

### Dependency Substitution

Dependency Substitution은 의존성을 대체하는 형식으로 동작하는 컴포지트 빌드의 상호작용 방법입니다.

구체적으로 예를 들어 설명하자면 루트 프로젝트에서 의존하는 'com.donghoonyoo:a'라는 항목을 독립된 프로젝트의 지정된 프로젝트로 치환할 수 있습니다.

Dependency Substitution은 아래와 같이 구성할 수 있습니다. 아래는 'com.donghoonyoo:a'라는 의존성 항목을 'my-app'의 루트 프로젝트로 치환하는 예시입니다.

```kotlin
// settings.gradle.kts
// ...
includeBuild("my-app") {
    dependencySubstitution {
        substitute(module("com.donghoonyoo:a")).using(project(":"))
    }
}
```

## 레퍼런스

- [Gradle - Structuring and Building a Software Component with Gradle](https://docs.gradle.org/current/userguide/multi_project_builds.html)
- [Gradle - Compsing builds](https://docs.gradle.org/current/userguide/composite_builds.html)
- [Gradle - IncludedBuild](https://docs.gradle.org/current/dsl/org.gradle.api.initialization.IncludedBuild.html)
