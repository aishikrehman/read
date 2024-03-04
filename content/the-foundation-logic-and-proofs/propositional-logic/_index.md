
---
title: "Propositional Logic"
---
## Introduction

The rules of logic give precise meaning to mathematical statements. These rules are used to distinguish between valid and invalid mathematical arguments. Because a major goal of this book is to teach the reader how to understand and how to construct correct mathematical arguments, we begin our study of discrete mathematics with an introduction to logic. Besides the importance of logic in understanding mathematical reasoning, logic has numerous applications to computer science. These rules are used in the design of computer circuits, the construction of computer programs, the verification of the correctness of programs, and in many other ways. Furthermore, software systems have been developed for constructing some, but not all, types of proofs automatically. We will discuss these applications of logic in this and later chapters.

## Propositions
Our discussion begins with an introduction to the basic building blocks of logic—propositions. A proposition is a declarative sentence (that is, a sentence that declares a fact) that is either true or false, but not both.
{{< h title="EXAMPLE 1" >}}
**All the following declarative sentences are propositions.**
1. Washington, D.C., is the capital of the United States of America.
2. Toronto is the capital of Canada.
3. 1 + 1 = 2.
4. 2 + 2 = 3.

Propositions 1 and 3 are true, whereas 2 and 4 are false.
{{</ h >}}
Some sentences that are not propositions are given in Example 2
{{< h warning >}}
**Consider the following sentences.**
1. What time is it?
2. Read this carefully.
3. x + 1 = 2.
4. x + y = z.
{{</ h >}}


Sentences 1 and 2 are not propositions because they are not declarative sentences. Sentences 3
and 4 are not propositions because they are neither true nor false. Note that each of sentences 3
and 4 can be turned into a proposition if we assign values to the variables. We will also discuss
other ways to turn sentences such as these into propositions in Section 1.4

We use letters to denote propositional variables (or statement variables), that is, variables that represent propositions, just as letters are used to denote numerical variables. The conventional letters used for propositional variables are p, q, r, s,... The truth value of a proposition is true, denoted by T, if it is a true proposition, and the truth value of a proposition is false, denoted by F, if it is a false proposition. The area of logic that deals with propositions is called the **propositional calculus** or **propositional logic**. It was first developed systematically by the Greek philosopher Aristotle more than 2300 years ago.


{{< def >}}
Let p be a proposition.  The negation of p, denoted by ¬p (also denoted by p), is the statement
**“It is not the case that p.”**
The proposition ¬p is read “not p.” The truth value of the negation of p, ¬p, is the opposite of the truth value of p.
{{</ def >}}

{{< e >}}
Find the negation of the proposition 
**“Michael’s PC runs Linux”**
and express this in simple English.
Solution: 
> The negation is
> **“It is not the case that Michael’s PC runs Linux.”**
> This negation can be more simply expressed as
> **“Michael’s PC does not run Linux.”**
{{</ e >}}





{{< h danger >}}
All the following declarative sentences are propositions.
1. Washington, D.C., is the capital of the United States of America.
2. Toronto is the capital of Canada.
3. 1 + 1 = 2.
4. 2 + 2 = 3.

Propositions 1 and 3 are true, whereas 2 and 4 are false.
Some sentences that are not propositions are given in Example 2" 
{{</ h >}}
{{< e >}}
All the following declarative sentences are propositions.
1. Washington, D.C., is the capital of the United States of America.
2. Toronto is the capital of Canada.
3. 1 + 1 = 2.
4. 2 + 2 = 3.

Propositions 1 and 3 are true, whereas 2 and 4 are false.
Some sentences that are not propositions are given in Example 2" 
{{</ e >}}