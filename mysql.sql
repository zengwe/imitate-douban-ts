SELECT * FROM douban_test.z_actor;
use douban_test;
DROP TABLE IF EXISTS z_movie;
create table z_movie (
	id int(10) unsigned not null auto_increment comment '',
	name varchar(100) not null default '' comment '电影名称',
    origin_name varchar(100) default '' comment '电影的其他名称',
    poster varchar(100) not null default '' comment '电影海报的地址',
    from_where int(10) unsigned default 0 comment '电影来自那个国家',
    brief varchar(255) not null default '' comment '电影简介',
	film_length int(10) unsigned default 0 comment '电影时长',
	film_length2 int(10) unsigned default 0 comment '剪切板时长',
    language varchar(255) not null default '' comment '电影的语言',
    prevue varchar(255) default '' comment '电影宣传片的位置',
	publish_time int(10) unsigned default 0 comment '发行时间',
	publish_country int(10) unsigned default 0 comment '发行于那个国家',
	created_time int(10) unsigned default 0 comment '数据库中的创建时间',
	updated_time int(10) unsigned default 0 comment '修改时间',
	primary key (id)
) engine = InnoDB default charset = utf8 comment '电影表';
drop table if exists z_actor;
create table z_actor(
	id int(10) unsigned auto_increment comment '',
    name varchar(10) not null comment '演员名',
    header varchar(255) not null comment '头像',
    other_name varchar(255) default '' comment '其他名字/分割',
    nick_name varchar(255) default '' comment '/分割',
    profession varchar(255) not null comment '/分割',
    brief text comment '简介',
    gender tinyint(2) unsigned default 0 comment '',
    birthdate int(10) unsigned comment '',
    status tinyint(2) default 0 comment '0normal,1delete',
    created_at int(10) unsigned comment '',
    updated_at int(10) unsigned comment '',
    primary key(id)
)engine = InnoDB default charset = utf8 comment '演员表';
drop table if exists z_actors_relation;
create table z_actors_relation(
	id int(10) unsigned auto_increment comment '',
    actor_id int(10) unsigned not null comment '',
    other_actor_id int(10) unsigned not null comment '',
    relationship varchar(10) not null comment '',
    descrip varchar(255) default '' comment '',
    is_family tinyint(1) default 0 comment '',
	status tinyint(2) default 0 comment '0normal,1delete',
    created_at int(10) unsigned comment '',
    updated_at int(10) unsigned comment '',
    primary key(id)
)engine = InnoDB default charset = utf8 comment '演员表关系';